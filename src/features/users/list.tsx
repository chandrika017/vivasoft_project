import Spinner from "@/components/ui/spinner";
import { useGetUsersQuery } from "@/services/users/usersApiService";

const UserList = () => {
  const { data, isLoading } = useGetUsersQuery();

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto w-full">
        <div className="inline-block py-2 sm:px-10 lg:px-8">
          <div className="">
            <h1 className="mb-3 pb-3 text-lg border-b-2 border-color">
              Users List
            </h1>

            {isLoading ? (
              <div>
                <Spinner />
              </div>
            ) : (
              <table className="text-sm font-light text-left w-full">
                <thead className="font-medium border-b dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-10 py-4">
                      #ID
                    </th>
                    <th scope="col" className="px-10 py-4">
                      UID
                    </th>
                    <th scope="col" className="px-10 py-4">
                      Title
                    </th>
                    <th scope="col" className="px-10 py-4">
                      Description
                    </th>
                    <th scope="col" className="px-10 py-4">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data.map((user: any) => (
                    <TableLink key={user.key} user={user} />
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserList;

function TableLink({ user }: any) {
  console.log(user);
  return (
    <tr className="border-b dark:border-neutral-500">
      <td className="px-10 py-4 font-medium whitespace-nowrap">{user?.id}</td>
      <td className="px-10 py-4 font-medium whitespace-nowrap">{user?.uid}</td>
      <td className="px-10 py-4 whitespace-nowrap">{user?.title}</td>
      <td className="px-10 py-4 whitespace-nowrap">{user?.desc}</td>
      <td className="px-10 py-4 whitespace-nowrap">{user?.date}</td>
    </tr>
  );
}
