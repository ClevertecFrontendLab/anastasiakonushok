// import { Footer } from '../components/Layout/Footer/Footer';
import { Header } from '../components/Layout/Header/Header';
import styles from './AppLayout.module.scss';
import { SidebarMenu } from './Layout/SidebarMenu/SidebarMenu';

type Props = {
    children: React.ReactNode;
};

export const AppLayout = ({ children }: Props) => (
    <div className={styles.wrapper}>
        <Header />

        <div className={styles.layout}>
            <aside className={styles.sidebar}>
                <SidebarMenu />
            </aside>

            <main className={styles.main}>{children}</main>
        </div>
    </div>
);
