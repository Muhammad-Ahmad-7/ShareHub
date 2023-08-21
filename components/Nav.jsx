"use client";
import { getProviders, signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Nav = () => {
  const { data: session } = useSession();

  const [toogle, setToogle] = useState(false);
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      console.log(res);
      setProviders(res);
    })();
  }, []);

  return (
    <nav className="flex justify-between px-4 mb-4">
      {/* Logo */}
      <div className="m-1">
        <Link href="/" className="flex gap-2 flex-center">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={30}
            height={30}
            className="object-contain"
          />
          <p className="logo_text">ShareHub</p>
        </Link>
      </div>
      {/* Dekstop Navigation */}
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="nav-div flex">
            <Link href="/create-post" className="btn">
              Create Post
            </Link>

            <button type="button" onClick={signOut} className="btn">
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className="profile rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="btn"
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>
      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative z-50">
        {session?.user ? (
          <div className="flex flex-col">
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className="rounded-full profile cursor-pointer"
              alt="profile"
              onClick={() => setToogle(!toogle)}
            />

            {toogle && (
              <div className="dropdown flex flex-col absolute top-11 right-4 w-[70vw] bg-[gray] p-4 gap-8">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToogle(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-post"
                  className="dropdown_link"
                  onClick={() => setToogle(false)}
                >
                  Create Post
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToogle(false);
                    signOut();
                  }}
                  className="mt-5 w-full btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="btn"
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
