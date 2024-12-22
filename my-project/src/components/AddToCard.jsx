import game from "../assets/images/game.png";
import star from "../assets/images/Five star.png";


export function AddToCard({
  discount,
  productName,
  delPrice,
  newPrice,
  starRank,
}) {
  return (
    <>

      <div className="main  bg-lime-300  w-[170px] h-[285px] m-8 ">
        <div className="img w-[170px] h-[150px] bg-[#F5F5F5] relative center ">
          <button
            className=" w-[35px] h-[16px] text-xs bg-myTheme rounded text-white absolute left-1 right-4 bottom-1 top-2 ;
"
          >
            {discount}
          </button>
          <img className=" w-[150px] h-[120px] m-10 hover:scale-125" src={game} alt="" />
        </div>
        <div className="myp w-[170px] h-[120px] bg-red-700 gap-2 my-3">
          <h2 className="w-[201] h-6 text-base bg-rose-500 font-medium hover:text-myTheme">{productName}</h2>
          <p className="flex gap-4 my-1 w-[100px] h-6  bg-yellow-600 text-base font-medium text-myTheme">
            <ins className="no-underline"> {newPrice}</ins> {"  "}
            <s className="text-slate-400 "> {delPrice}</s>
          </p>
          <div className="star-img flex gap-2">
            <img src={star} alt="" /><span>{starRank}</span>
          </div>
        </div>
      </div>

    </>
  );
}
