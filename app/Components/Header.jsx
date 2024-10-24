"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import SearchProducts from "./SearchProducts";
import * as icons from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { signIn, signOut, useSession,getProviders } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser } from "../redux/shoppingSlice";
import toast,{Toaster} from "react-hot-toast";

const Header = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  useEffect(() => {
    session
      ? dispatch(
          addUser({
            name: session?.user?.name,
            email: session?.user?.email,
            image: session?.user?.image,
          })
        )
      : dispatch(deleteUser());
  },[session, dispatch ]);
  return (
    <div className="h-20 w-full  py-4 items-center border-b-2 px-4 lg:px-20  bg-white z-50 ">
      <div className="flex m-auto justify-between">
        {/* logo */}
        <Link href="/" className="text-xl lg:text-2xl font-[Jost] font-extrabold self-center">
          <h3>SHOES HIVE.</h3>
        </Link>

        {/* serchbar */}
        <div className="hidden md:block">
          <SearchProducts />
        </div>
        <Link
            href="/cart"
            className="btn black_btn flex gap-2 p-3 items-center rounded-full"
          >
            <FaCartPlus /> Cart{" "}
          </Link>
          

        
        
      </div>
      <Toaster />
    </div>

  


  );
};

export default Header;
