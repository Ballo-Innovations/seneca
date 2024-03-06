import './globals.css';

export default function Loading() {
  return (
    <div className="loader-page bg-gray-900 text-white flex items-center justify-center">
      <span className='text'>S</span>
      <span className='text'>E</span>
      <span className='text'>N</span>
      <span className='text'>E</span>
      <div className="loader-container">
        <div className="loader"></div>
        <span className='loader-text'>C</span>
      </div>
      <span className='text'>A</span>
    </div>
  );
};
