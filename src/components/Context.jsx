import bedside from '../assets/bedside.jpg'
export default function Context() {
  return (
    <>
        <div class="row">
            <div class="col-8">
                <img src={bedside} alt="" className='bedside'/>
            </div>
            <div class="col-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ipsam illum qui quidem, cumque illo, aperiam labore quo explicabo eos rerum tempore odit voluptates. Error commodi quo numquam totam voluptate?
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum porro, magnam, tenetur similique nam culpa et consectetur optio vitae velit earum deleniti veritatis nesciunt quaerat, sequi sed recusandae excepturi nihil.</p>
            </div>
            <div class="col-8">
                <img src={bedside} alt="" className='bedside'/>
            </div>
        </div>
    </>
  )
}
