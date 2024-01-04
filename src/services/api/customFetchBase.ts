import {
    BaseQueryFn,
    FetchArgs,
    fetchBaseQuery,
    FetchBaseQueryError,
  } from '@reduxjs/toolkit/query';
  import { Mutex } from 'async-mutex';
  import { userLoggedIn, userLoggedOut } from '../auth/authSlice';
  
  const baseUrl = process.env.REACT_APP_SERVER_ENDPOINT;
  
  // Create a new mutex
  const mutex = new Mutex();
  
  const baseQuery = fetchBaseQuery({
    baseUrl,
    prepareHeaders: async (headers, { getState}) => {
        const allState:any = getState();
        const token = allState?.auth?.accessToken;
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }

        return headers;
    },
  });
  
  const customFetchBase: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
  > = async (args, api, extraOptions) => {
    // wait until the mutex is available without locking it
    await mutex.waitForUnlock();
    let result = await baseQuery(args, api, extraOptions);
    const getAllReducer:any = api.getState();
    console.log(getAllReducer)
    if ((result.error?.data as any)?.code === 403) {
      if (!mutex.isLocked()) {
        console.log("safwan error 2")
        const release = await mutex.acquire();
        try {
          const reData ={ "refreshToken" : getAllReducer?.auth?.refreshToken}
          const refreshResult:any = await baseQuery(
            { 
                // credentials: 'include', 
                url: '/auth/refresh', 
                method: 'POST',
                body: reData,
            },
            api,
            extraOptions
          );

           if(refreshResult?.data?.code === 200){
            const dataStore = {
                accessToken: refreshResult?.data?.data?.accessToken,
                refreshToken: refreshResult?.data?.data?.refreshToken,
                user: getAllReducer?.auth?.user,
            };
            localStorage.setItem("auth",JSON.stringify(dataStore));
            api.dispatch(userLoggedIn(dataStore));
            // console.log(getAllReducer?.auth?.user)
            result = await baseQuery(args, api, extraOptions);
           }else{
             api.dispatch(userLoggedOut());
             localStorage.removeItem("auth");
             // window.location.href = '/login';
           }
        } finally {
          // release must be called once the mutex should be released again.
          release();
        }
      } else {
        // wait until the mutex is available without locking it
        await mutex.waitForUnlock();
        result = await baseQuery(args, api, extraOptions);
      }
    }
  
    return result;
  };
  
  export default customFetchBase;