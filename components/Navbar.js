import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
// import NavLogo from "../public/assets/nav.png";
import {
  AiOutlineShoppingCart,
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiFillCloseCircle,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";

const Navbar = ({
  logout,
  user,
  cart,
  addToCart,
  removeToCart,
  clearCart,
  subTotal,
}) => {
  //console.log(cart);
  const [dropdown, setDropdown] = useState(false);
  // const setDropdown = () => {
  //   setDropdown(!dropdown);
  // };
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };

  const ref = useRef();
  return (
    <div className="flex flex-col md:flex-row sticky top-0 bg-white z-10 justify-center md:justify-start items-center py-2 shadow-lg">
      <div className="logo mr-auto md:mx-5">
        <Link href={"/"}>
          {/* <Image src="/logo.png" width={100} height={40} alt="" /> */}
          <p className="bold text-3xl text-blue-600 m-4">OneStop SOLUTION</p>
        </Link>
      </div>
      <div className="nav">
        <ul className="flex items-center  space-x-5  md:space-x-8 font-bold  md:text-md">
          <Link href={"/tshirt"}>
            <li className="hover:bg-blue-200 rounded-lg">Home Decor</li>
          </Link>
          <Link href={"/hoddies"}>
            <li className="hover:bg-blue-200 rounded-lg">Repairs & Service</li>
          </Link>
          <Link href={"/stickers"}>
            <li className="hover:bg-blue-200 rounded-lg">Daily Needs</li>
          </Link>
          <Link href={"/mugs"}>
            <li className="hover:bg-blue-200 rounded-lg">Wedding Requisites</li>
          </Link>
          {/* <Link href={'/'}><li>T-shirts</li></Link> */}
        </ul>
      </div>
      {/* //todo cart */}

      <div className="flex cart items-center absolute right-0 top-4 text-3xl md:text-3xl mx-4 text-blue-500 hover:text-blue-600 cursor-pointer">
        <a
          onMouseOver={() => {
            setDropdown(true);
          }}
          onMouseLeave={() => {
            setDropdown(false);
          }}
        >
          {dropdown && (
            <div
              onMouseOver={() => {
                setDropdown(true);
              }}
              onMouseLeave={() => {
                setDropdown(false);
              }}
              className="absolute text-xl w-40 rounded-md px-5 right-8 bg-blue-100 top-6"
            >
              <ul>
                <Link href={"/myaccount"}>
                  <li className="py-1 hover:text-blue-600  text-sm ">
                    MyAccount
                  </li>
                </Link>
                <Link href={"/orders"}>
                  <li className="py-1 hover:text-blue-600  text-sm ">Orders</li>
                </Link>
                <li
                  onClick={logout}
                  className="py-1 hover:text-blue-600  text-sm "
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
          {user.value && <MdAccountCircle className="mx-2  md:text-2xl" />}
        </a>

        {!user.value && (
          <Link href={"/login"}>
            <button className="bg-blue-600 px-2 py-1 rounded-xl text-sm text-white mx-2">
              Login
            </button>
          </Link>
        )}
        <AiOutlineShoppingCart
          onClick={toggleCart}
          className="text-xl md:text-2xl"
        />
        {/* <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-blue-50 rounded-full -top-2 -right-2 ">{Object.keys(cart).qty}</div> */}
      </div>

      {/* side bar */}
      <div
        ref={ref}
        className={`absolute w-72 bg-blue-100 sideCart overflow-y-scroll top-0 right-0 py-10 px-8 transform transition-transform ${
          Object.keys(cart).length !== 0 ? "translate-x-0" : "translate-x-full"
        } `}
      >
        <h2 className="font-bold text-xl text-center">Shopping Cart</h2>

        <AiFillCloseCircle
          onClick={toggleCart}
          className="absolute top-5 right-2 cursor-pointer text-2xl text-blue-500"
        />
        <ol className="list-decimal  font-semibold">
          {Object.keys(cart).length == 0 && (
            <div className="my-4  font-semibold">Your Cart is Empty</div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="item flex my-5">
                  <div className="w-2/3 font-semibold">
                    {cart[k].name}({cart[k].size}/{cart[k].variant})
                  </div>
                  <div className="w-1/3 flex items-center justify-center font-semibold ">
                    <AiFillMinusCircle
                      onClick={() => {
                        removeToCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        );
                      }}
                      className="cursor-pointer text-blue-500"
                    />
                    <span className="mx-2"> {cart[k].qty}</span>
                    <AiFillPlusCircle
                      onClick={() => {
                        addToCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        );
                      }}
                      className="cursor-pointer text-blue-500"
                    />
                  </div>
                </div>
              </li>
            );
          })}
          <div className="font-bold">SubTotal:₹{subTotal}</div>
        </ol>
        <div className="flex">
          <Link href={"/checkout"}>
            <button className="flex mr-2 text-white bg-blue-500 border-0 py-2 px-2 focus:outline-none hover:bg-blue-300 rounded text-sm">
              <BsFillBagCheckFill className="m-2" /> CheckOut
            </button>
          </Link>
          <button
            onClick={clearCart}
            className="flex mr-2 text-white bg-blue-500 border-0 py-2 px-2 focus:outline-none hover:bg-blue-300 rounded text-sm"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
