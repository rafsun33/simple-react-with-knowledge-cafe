import profile from "../../../images/profile.png"
const Header = () => {
    return (
        <header className="flex items-center justify-between mx-8 md:mx-20 my-10 border-b-2 pb-8">
            <h3 className="text-3xl font-bold ">Knowledge Cafe</h3>
            <img src={profile} />
        </header>
    );
};

export default Header;