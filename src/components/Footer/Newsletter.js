import React from 'react';

export default function Newsletter() {
  return (
    <div className="">
      <h3 className="upppercase text-gray-500 font-bold mb-3">
        Sign Up For Our Newsletter
      </h3>
      <form className="flex gap-3 mb-1.5">
        <input
          type="text"
          placeholder="Enter your email"
          className="border border-gray-300 max-w-xs w-full rounded-lg py-2 px-3"
        />
        <button className="bg-blue-500 text-white font-medium text-sm uppercase py-2 px-3 rounded-lg">
          Subscribe
        </button>
      </form>
      <p className="text-xs text-gray-500 font-medium">
        By clicking the Subscribe button, you are agreeing to our privcy &
        Cookiee policy.
      </p>
    </div>
  );
}
