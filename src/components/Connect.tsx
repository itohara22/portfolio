const Connect = () => {
  return (
    <div className="min-h-[70vh] container mx-auto px-4">
      <h2 className="text-end text-5xl font-rozha text-dark-green mb-12">
        Let's create something together
      </h2>
      <div className="w-[70vw] mx-auto">
        <a href="mailto:ito.k23018@gmail.com">
          <button className="bg-green w-full min-h-60 h-max text-cream text-7xl lg:text-9xl font-rozha rounded-3xl p-12 drop-shadow-lg">
            DROP ME A MESSAGE
          </button>
        </a>
      </div>
      <div className="grid justify-items-end grid-cols-3 mt-12 pb-4 text-dark-green">
        <div className="justify-self-start self-end">
          <div className="text-sm font-inter text-start">
            Site designed and coded by Shubham
          </div>
        </div>
        <div>
          <h3 className="text-3xl md:text-4xl font-inter">Contact Details</h3>
          <ul className="text-lg font-inter">
            <li className="mt-4">ito.k23018@gmail.com</li>
            <li className="mt-4">+91 9509523018</li>
          </ul>
        </div>
        <div>
          <h3 className="text-3xl md:text-4xl font-inter">Others</h3>
          <ul className="text-lg font-inter">
            <li className="mt-4">Linkedin</li>
            <li className="mt-4">Github</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Connect;
