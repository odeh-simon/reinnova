import twitter from '../assets/icons/social icons/twitter.svg';
import facebook from '../assets/icons/social icons/fb.svg';
import linkedin from '../assets/icons/social icons/linkedin.svg';

export default function socialIcons() {
  return (
    <div className='flex items-center gap-7'>
        <a href="#twitter" target='_blank' className='hover:scale-110 transition duration-500'>
            <img src={twitter} alt="twitter icon" className='h-[28.762px] w-[34.204px]'/>
        </a>
        <a href="#fb" target='_blank' className='hover:scale-110 transition duration-500'>
            <img src={facebook} alt="facebook icon" className='h-[28.762px] w-[34.204px]'/>
        </a>
        <a href="#linkedin" target='_blank' className='hover:scale-110 transition duration-500'>
            <img src={linkedin} alt="linkedin icon" className='h-[28.762px] w-[34.204px]'/>
        </a>
    </div>
  )
}
