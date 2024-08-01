"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
    const path = usePathname();

    return (
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <Link href="/">home</Link>
            {path === "/" ? " 응애" : ""}
          </li>
          <li>
            <Link href="/about-us">about us</Link>
            {path === "/about-us" ? " 응애응애" : ""}
          </li>
        </ul>
      </nav>
    );
}