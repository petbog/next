import { Header } from "../Components/Header/index";
import cls from './Styles/page.module.css'

export default function Home() {
  return (
    <div className="">
      <Header />
      <div className={cls.bg}></div>
    </div>
  );
}
