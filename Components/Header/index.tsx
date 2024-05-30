"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { classNames } from "../../Helpers/classnames";
import cls from './header.module.scss'
import { LinksHeader } from '../../Config/config'
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useRouter } from 'next/navigation';


export const Header = () => {
    const [open, setOpen] = useState(false);

    const pathname = window.location.pathname;




    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 30)
    }

    const toglleNavbar = () => {
        setOpen(prev => !prev)
    }



    const scrollTo = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }

    const scrollToLink = () => {
        setOpen(() => false)
        scrollTo()
    }
    const isMenu = pathname.includes('menu')

    useEffect(() => {

    }, [pathname])

    const mods = {
        [cls.scroll]: isScrolled,
        [cls.menu]: isMenu,
    };

    return (
        <div className={classNames(cls.Header, mods, [])} >
            <div className="content">
                <div className={cls.Header_container}>
                    {/* <Link onClick={scrollTo} className={classNames(cls.Header_logo, { [cls.scroll_logo]: isScrolled }, [])} href={'/'}>
                   // @ts-ignore
                        <Logo className={classNames(cls.Logo, { [cls.scroll_logo]: isScrolled }, [])} />
                    </Link> */}
                    <button onClick={toglleNavbar} className={classNames(cls.BtnClose, { [cls._active_btn]: open }, [])}>
                        <span></span>
                    </button>
                    <div className={classNames(cls.Navbar, { [cls._active_nav]: open }, [])}>
                        <ul >
                            {LinksHeader.map(link => {
                                if (link.links) {
                                    return (
                                        link.links.map((item) =>
                                            <Link onClick={scrollToLink} key={item.name} href={item.link}>
                                                <li className={classNames('', { [cls.activeLink]: pathname.includes(item.link) }, [])}>{item.name}</li>
                                            </Link>)
                                    )
                                }
                                return (!isMenu &&
                                    <ScrollLink key={link.link} to={link.link} onClick={() => setOpen(false)} smooth={true} duration={500}>
                                        <li>
                                            {link.name}
                                        </li>
                                    </ScrollLink>)

                            }
                            )}
                            {isMenu &&
                                <Link onClick={scrollToLink} href={"/"}>
                                    <li>На главную</li>
                                </Link>}
                        </ul>
                    </div>

                </div>
            </div>
        </div >
    )
}