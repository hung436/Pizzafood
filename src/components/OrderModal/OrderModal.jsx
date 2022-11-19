import { Modal, useMantineTheme } from "@mantine/core";
import css from "./OrderModal.module.scss";
function OrderModal({ opened, setOpened, showModal }) {
  const theme = useMantineTheme();
  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={opened}
      onClose={() => {
        setOpened(false);
      }}
    >
      <form action="" className={css.formContainer}>
        <input type="text" name="name" required placeholder="Name" />
        <input type="text" name="phone" required placeholder="Phone Number" />
        <div>
          <select
            class="form-select form-select-sm mb-3"
            id="city"
            aria-label=".form-select-sm"
          >
            <option value="" selected>
              Chọn tỉnh thành
            </option>
          </select>

          <select
            class="form-select form-select-sm mb-3"
            id="district"
            aria-label=".form-select-sm"
          >
            <option value="" selected>
              Chọn quận huyện
            </option>
          </select>

          <select
            class="form-select form-select-sm"
            id="ward"
            aria-label=".form-select-sm"
          >
            <option value="" selected>
              Chọn phường xã
            </option>
          </select>
        </div>
        <textarea name="address" rows={3} placeholder="Ghi chú"></textarea>

        <span>
          Bạn sẽ trả <span>50.000</span> đồng khi nhận hàng
        </span>
        <button type="submit" className="btn">
          Đặt hàng{" "}
        </button>
      </form>
      {/* Modal content */}
    </Modal>
  );
}

export default OrderModal;
