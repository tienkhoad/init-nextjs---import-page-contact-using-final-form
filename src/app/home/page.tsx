
import { Metadata } from 'next';
import 'bootstrap-icons/font/bootstrap-icons.css';
import TopHeader from '@/component/topheader/page';
import MainContent from '@/component/maincontent/page';

export const metadata: Metadata = {
    title: "Trang chủ - TAM DUC PHAT PCCC COMPANY LIMITED",
}

const Home = () => {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            <body>
                <TopHeader />
                <MainContent />
            </body>
        </html>
    );

};

export default Home;