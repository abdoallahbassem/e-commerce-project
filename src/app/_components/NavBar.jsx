"use client";
import { CartContext } from "@/context/cartContext";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useContext } from "react";
import { jwtDecode } from "jwt-decode";


export default function NavBar() {
  const { numOfCart } = useContext(CartContext);
  const { data: session, status } = useSession();
  function logOut() {
    signOut({ callbackUrl: "/login" });
  }

  return (
    <div className="py-6 bg-green-600 ">
      <div className="w-[90%] mx-auto flex px-3 flex-col gap-3 lg:flex-row justify-between items-center">
        <div className="left">
          <ul className="flex gap-8 items-center text-[20px] text-white">
            <li>
              <Link href="/" className=" text-3xl me-1 font-bold ">
                {" "}
                <i className="fa-solid fa-cart-shopping text-white  me-0.5"></i>{" "}
                fresh cart
              </Link>
            </li>
            <li>
              <Link href="/">home</Link>
            </li>
            {session && (
              <li>
                <Link href="/cart">
                  <i className="fas fa-cart-shopping text-2xl my-0 py-0"></i>
                  {numOfCart > 0 ? (
                    <span className=" relative">
                      <div className=" absolute top-[-25px] flex flex-col gap-0  justify-center items-center ps-2  rounded-full text-center mx-auto  ">
                        <span className=" my-0 py-0 text-[20px] ">
                          {numOfCart}
                        </span>
                      </div>
                    </span>
                  ) : (
                    ""
                  )}
                </Link>
              </li>
            )}
            <li>
              <Link href="/products">products</Link>
            </li>
            <li>
              <Link href="/categories">categories</Link>
            </li>
            <li>
              <Link href="/brands">brands</Link>
            </li>
            <li>
              <Link href="/wishList">wish list</Link>
            </li>
          </ul>
        </div>
        <div className="right flex gap-4 items-center text-end text-white  ">
          {session && (
            <>
              <span
                onClick={logOut}
                href="/login"
                className=" text-xl  cursor-pointer"
              >
                sign out <i class="fa-solid fa-right-to-bracket"></i>
              </span>
            </>
          )}
          {!session && (
            <>
              <Link href="/register" className=" text-2xl">
                register
              </Link>
              <Link href="/login" className=" text-2xl">
                login
              </Link>
              <i className="fab fa-facebook text-2xl"></i>
              <i className="fab fa-instagram text-2xl"></i>
              <i className="fab fa-twitter text-2xl"></i>
              <i className="fab fa-linkedin text-2xl"></i>
              <i className="fab fa-youtube text-2xl"></i>
              <i className="fab fa-tiktok text-2xl"></i>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
