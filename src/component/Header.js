import React from 'react'
import classes from "./Header.module.css";

export default function Header() {
  return (
    <header className={`bg-primary px-5 py-2 text-white ${classes.setHeading}`}>
      To Do List
    </header>
  )
}
