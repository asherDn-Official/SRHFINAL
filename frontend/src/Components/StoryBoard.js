import ZoomableImageCarousel from "./ImageSldier";

export default function StoryBoard() {
  return (
    <>
      <div class="hundredvh">
        <div class="tittleonannamalai">Annamalai 2.0</div>
        <div class="underthetitttlecont">
          Product-Focused vs. Customer - Focused Retailer
        </div>
        <div class="disflexonwholebox">
          <div class="centerspaceonimagesec">
            <ZoomableImageCarousel />
          </div>
        </div>
        <div class="underthecapcontent">
          Have you read ? Do you want to become like Annamalai ?
        </div>
        <div class="buttondivflex">
          <button class="clasonbutton" type="menu">
            Click here <span> &gt;&gt; </span>
          </button>
        </div>
      </div>

      {/* <ZoomableImageCarousel /> */}
    </>
  );
}
