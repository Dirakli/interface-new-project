
import FooterLogo from '../../assets/devvio.png'


function Footer() {
    return (
        <div className='w-screen h-14 flex justify-between items-center pr-8 bg-gradient-to-r from-sky-600 to-blue-900' >
            <div className='w-96 flex justify-between items-center '>
                <div className='text-xs w-48 h-14 bg-white flex justify-center items-center' >
                    <img className='cursor-pointer' src={FooterLogo} alt="logo called DevvESG" />
                </div>
                <h1 className='text-xs hidden sm:flex text-slate-100 loading-normal font-libre-franklin'>Powered by Devv.io</h1>
            </div>
            <div className='flex justify-between items-center font-libre-franklin text-slate-100 text-xs'>
                <span>© 2023 Devvio. All Rights Reserved. Terms of Use  |  Contact Devvio</span><div></div>
            </div>

        </div>
    )
}

export default Footer;