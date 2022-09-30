import Nav from "./Component/Nav";
import two from './Assets/2.png'
import one from './Assets/1.png'
import three from './Assets/monpay.png'
import index from './Assets/index.png'
import mockup from './Assets/mockup.png'
import {FaBitcoin, FaMobile} from 'react-icons/fa'
function App() {
  return (
    <div className="w-full h-full bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <Nav />
      <div className="container mx-auto ">
        <div className="flex">
          <div className="w-1/2 flex flex-col justify-center">
            <h1 className="text-5xl font-bold w-[75%] text-white"><span className="text-pur">Easiest</span> Payment method ever </h1>
            <p className="pt-5 w-[81%] text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
          <div className="w-1/2">
            <div className="">
              <img src={two} className="w-full h-full" />
              <div className="absolute top-32 right-24 animate-bounce">
                <img className="w-[265px] h-[208px]" src={one} />
              </div>
              <div className="absolute rounded-3xl h-14 w-72 shadow-xl text-center flex justify-start p-2 space-x-4 font-semibold bottom-10 bg-gr text-white text-3xl items-center">
                <FaBitcoin /><p>Easy Payment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-10 py-16">
        <img className="w-28 rounded-2xl" src={index} />
        <img className="w-32" src={three} />
      </div>
      <div className="flex justify-between py-5">
        <div className="w-1/2">
          <img className="" src={mockup} />
        </div>
        <div className="w-1/2">
          <h1 className="text-5xl text-white w-[70%]">Manage Everything in Your Hand</h1>
          <p className="text-gray-500 w-[80%] pt-5 text-xs">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          <div className="pt-10">
          <div className="space-y-5 px-5">
            <div className="text-4xl text-white rounded-full p-10 bg-pur px-5 flex items-center space-x-2">
              <FaMobile />
              <div className="text-xs">
                <h1 className="text-2xl">User Friendly </h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. </p>
              </div>
            </div>
            <div className="text-4xl text-white rounded-full p-10 bg-pur px-5 flex items-center space-x-2">
              <FaMobile />
              <div className="text-xs">
                <h1 className="text-2xl">User Friendly </h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. </p>
              </div>
            </div>
            <div className="text-4xl text-white rounded-full p-10 bg-pur px-5 flex items-center space-x-2">
              <FaMobile />
              <div className="text-xs">
                <h1 className="text-2xl">User Friendly </h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. </p>
              </div>
            </div>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
