import Dots from "../../assets/icons/3dots.svg"
import Edit from "../../assets/icons/edit.svg"
import Delete from "../../assets/icons/delete.svg"
export default function ActionPost() {
  return (
    <>
      <div className="absolute right-0 top-0">
        <button>
          <img src={Dots} alt="3dots of Action" />
        </button>

        <div className="action-modal-container">
          <button className="action-menu-item hover:text-lwsGreen">
            <img src={Edit} alt="Edit" />
            Edit
          </button>
          <button className="action-menu-item hover:text-red-500">
            <img src={Delete} alt="Delete" />
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
