import Nav from "./Component/Nav";
import two from './Assets/2.png'
import one from './Assets/1.png'

function App() {
  return (
    <div className="w-full h-full">
      <Nav />
      <div className="container mx-auto">
        <div className="flex">
          <div className="w-1/2 flex flex-col justify-center">
            <h1 className="text-5xl font-bold w-[75%]"><span className="text-pur">Easiest</span> Payment method ever </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
          <div className="w-1/2">
            <div className="">
              <img src={two} className="w-full h-full" />
              <div className="absolute">
                <img width={40} src={one} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
