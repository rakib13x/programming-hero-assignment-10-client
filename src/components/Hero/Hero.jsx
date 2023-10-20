const Hero = () => {
  return (
    <div className="px-[120px]">
      <div
        className="hero h-[550px] rounded-xl object-contain"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-vector/realistic-cyber-monday-twitter-header_23-2149816807.jpg?w=740&t=st=1697780067~exp=1697780667~hmac=9e3c9905d5533fc1bfa8e4683e67b8f0768fa0eb2ceffdccb6c7a2239d7a3174)",
        }}
      >
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
