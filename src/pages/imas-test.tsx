export default function imas() {
  return (
    <>
      <div className='m-auto flex h-full max-w-full items-center justify-between'>
        <div className='relative mx-2.5 mt-2 box-content inline-block h-16 w-40 justify-center bg-gray-500 text-center align-middle'>
          LOGO
        </div>
        <div className='relative flex items-center justify-end'>
          <div className='relative flex items-center justify-center'>
            <div className='box-content inline-block h-16 w-20 bg-gray-50 text-center align-middle'>
              ticket
            </div>
          </div>
          <div className='relative flex items-center justify-center'>
            <div className='box-content inline-block h-16 w-20 bg-gray-50 text-center align-middle'>
              store
            </div>
          </div>
          <div className='relative flex items-center justify-center'>
            <div className='box-content inline-block h-16 w-20 bg-gray-50 text-center align-middle'>
              search
            </div>
          </div>
        </div>
        <div className='tx-sm relative ml-20 flex items-center justify-center rounded-3xl bg-gray-500 px-20 py-4 align-middle font-bold text-pink-400 shadow-md '>
          login
        </div>
      </div>

      <div className='relative w-full overflow-hidden'>
        <div className='w-630px pb-30px  relative m-auto block'>
          <div className='inline-box box-content h-full bg-gray-500'></div>
        </div>
      </div>
    </>
  );
}
