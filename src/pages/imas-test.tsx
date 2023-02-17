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

      <div className='static m-0 my-10 box-border flex h-48 w-full p-0'>
        <div className='mx-4 box-content inline-block h-full w-60 justify-center bg-gray-500 text-center align-middle'>
          box
        </div>
        <div className='mx-4 box-content inline-block h-full w-60 justify-center bg-gray-500 text-center align-middle'>
          box
        </div>
        <div className='mx-4 box-content inline-block h-full w-60 justify-center bg-gray-500 text-center align-middle'>
          box
        </div>
        <div className='mx-4 box-content inline-block h-full w-60 justify-center bg-gray-500 text-center align-middle'>
          box
        </div>
      </div>

      <div className='mx-1 box-border flex w-full grid-cols-6'>
        <div className='h-20 w-1/6 bg-pink-100 text-center'>
          <span>
            BRAND <br />
            SUMMARY
            <br />
          </span>
          <span>ブランド情報</span>
        </div>
        <div className='mx-2 h-20 w-1/6 bg-pink-500 text-center'>
          THE IDOLM@STER
        </div>
        <div className='mx-2 h-20 w-1/6 bg-pink-500 text-center'>
          シンデレラガールズ
        </div>
        <div className='mx-2 h-20 w-1/6 bg-pink-500 text-center'>
          ミリオンライブ
        </div>
        <div className='mx-2 h-20 w-1/6 bg-pink-500 text-center'>SideM</div>
        <div className='mx-2 h-20 w-1/6 bg-pink-500 text-center'>
          シャイニーカラーズ
        </div>
      </div>

      <div className='mx-1 my-2 box-border flex grid w-full grid-cols-6'>
        <div className='h-20 w-11/12 bg-blue-300 text-center '>ニュース</div>
        <div className='h-20 w-11/12 bg-blue-300 text-center '>ゲーム</div>
        <div className='h-20 w-11/12 bg-blue-300 text-center '>
          ライブ・イベント
        </div>
        <div className='h-20 w-11/12 bg-blue-300 text-center '>アニメ</div>
        <div className='h-20 w-11/12 bg-blue-300 text-center '>配信番組</div>
        <div className='h-20 w-11/12 bg-blue-300 text-center '>ラジオ</div>

        <div className='my-2 h-20 w-11/12 bg-blue-300 text-center'>グッズ</div>
        <div className='my-2 h-20 w-11/12 bg-blue-300 text-center'>
          コラボ・キャンペーン
        </div>
        <div className='my-2 h-20 w-11/12 bg-blue-300 text-center'>
          ミュージック
        </div>
        <div className='my-2 h-20 w-11/12 bg-blue-300 text-center'>
          ブック・コミック
        </div>
        <div className='my-2 h-20 w-11/12 bg-blue-300 text-center'>
          メディア
        </div>
        <div className='my-2 h-20 w-11/12 bg-blue-300 text-center'>
          ムービー
        </div>
      </div>

      <div className='box-border h-14 bg-gray-100'>NEWS</div>

      <div className='mx-1 my-2 box-border flex grid w-full grid-cols-3'></div>
    </>
  );
}
