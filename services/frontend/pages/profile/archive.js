import { useRouter } from "next/router";
import ArchiveContainer from "../../components/ArchivePage/ArchiveContainer";
import Header from "../../components/Header/Header";
import HeaderService from "../../components/Header/HeaderService/HeaderService";
import HeaderSettings from "../../components/Header/HeaderSettings/HeaderSettings";
import SettingsNav from "../../components/SettingsPage/SettingsNav";

const archive = () => {

    return (
        <>
            <Header />
            <HeaderService />
            <main className="main main--archive">
                <SettingsNav title="Archive" />
                
                <ArchiveContainer />
            </main>
        </>
    );
}

export default archive;