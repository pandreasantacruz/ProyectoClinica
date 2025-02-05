import { people } from "../helpers/People";
import { seccion, titulos, parrafo } from "../styles/OurServices.module.css";

function OurServices() {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {people.map((person) => (
        <li key={person.email} className="flex justify-between gap-x-6 py-5">
          <div className={`flex min-w-0 gap-x-4 ${seccion}`}>
            <img
              alt=""
              src={person.imageUrl}
              className={`max-w-[350px] h-auto flex-none ${seccion}`}
            />
            <div className="min-w-0 flex-auto">
              <p className={`text-sm/6 font-semibold text-gray-900 ${titulos}`}>
                {person.name}
              </p>
              <p className={`mt-1  text-xs/5 text-gray-500 ${parrafo}`}>
                {person.email}
              </p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm/6 text-gray-900">{person.role}</p>
            {person.lastSeen ? (
              <p className="mt-1 text-xs/5 text-gray-500"></p>
            ) : (
              <div className="mt-1 flex items-center gap-x-1.5"></div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
export default OurServices;
