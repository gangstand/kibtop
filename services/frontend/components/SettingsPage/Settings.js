import Link from "next/link";
import Text from "../Elementes/Text/Text";
import SettingsNav from "./SettingsNav";

const Settings = () => {
    return (
        <>
            <main className="main">
                <SettingsNav title={'Settings'} />

                <div className="container">
                    <nav className="settings">
                        <Link href="/profile/settings/locale" className="settings__link">
                            <Text content="language and currency" />
                        </Link>

                        <Link href="" className="settings__link">
                            <Text content="Website advertising" />
                        </Link>

                        <Link href="" className="settings__link">
                            <Text content="Сontact support" />
                        </Link>

                        <Link href="" className="settings__link settings__link--red">
                            <Text content="Delete Account" />
                        </Link>
                    </nav>
                </div>
            </main>
        </>
    );
}

export default Settings;