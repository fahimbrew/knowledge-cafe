import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='container mx-auto flex justify-between py-4 items-center border-b-2'>
            <h1 className="text-2xl font-semibold">Knowledge Cafe</h1>
            <img className='object-cover' src={profile} alt="profile" />
        </div>
    );
};

export default Header;