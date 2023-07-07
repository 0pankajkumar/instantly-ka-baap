import Link from "next/link";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

export default function SideBar() {
  return (
    <div className="h-screen max-w-[9%]">
      <div className="px-4 py-2">
        <ul className="flex flex-col justify-between">
          <li className="mb-2 rounded hover:shadow hover:bg-gray-200">
            <Link
              href="/accounts"
              className="inline-block w-full h-full px-3 py-2 font-bold text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block w-6 h-6 mr-2 -mt-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </Link>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-gray-200">
            <Link
              href="/analytics"
              className="inline-block w-full h-full px-3 py-2 font-bold text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block w-6 h-6 mr-2 -mt-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
              </svg>
            </Link>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-gray-200">
            <Link
              href="/campaigns"
              className="inline-block w-full h-full px-3 py-2 font-bold text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block w-6 h-6 mr-2 -mt-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </Link>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-gray-200">
            <Link
              href="/inbox"
              className="inline-block w-full h-full px-3 py-2 font-bold text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block w-6 h-6 mr-2 -mt-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
