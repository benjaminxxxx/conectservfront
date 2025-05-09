import { signInWithGoogle } from "@/actions/auth";

export default function SignIn() {
  return (
    <form action={signInWithGoogle}>
      <button
        type="submit"
        className="my-5 flex items-center justify-center w-full px-5 py-2.5 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
      >
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.1 10.229C20.1 9.51996 20.0363 8.83814 19.9182 8.18359H10.5V12.0518H15.8818C15.65 13.3018 14.9454 14.3609 13.8864 15.07V17.579H17.1182C19.0091 15.8381 20.1 13.2745 20.1 10.229Z"
            fill="#4285F4"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.491 19.9994C13.191 19.9994 15.4547 19.104 17.1092 17.5767L13.8774 15.0676C12.9819 15.6676 11.8365 16.0221 10.491 16.0221C7.8865 16.0221 5.68195 14.263 4.89559 11.8994H1.55469V14.4903C3.20014 17.7585 6.58195 19.9994 10.491 19.9994Z"
            fill="#34A853"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.90454 11.8987C4.70454 11.2987 4.5909 10.6578 4.5909 9.99872C4.5909 9.33963 4.70454 8.69872 4.90454 8.09872V5.50781H1.56363C0.886363 6.85781 0.5 8.38508 0.5 9.99872C0.5 11.6124 0.886363 13.1396 1.56363 14.4896L4.90454 11.8987Z"
            fill="#FBBC05"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.491 3.97727C11.9592 3.97727 13.2774 4.48182 14.3138 5.47273L17.1819 2.60454C15.4501 0.990909 13.1865 0 10.491 0C6.58195 0 3.20014 2.24091 1.55469 5.50909L4.89559 8.1C5.68195 5.73636 7.8865 3.97727 10.491 3.97727Z"
            fill="#EA4335"
          ></path>
        </svg>
        <span className="text-gray-700 font-medium ml-3">Continuar con Google</span>
      </button>
    </form>
  );
}
