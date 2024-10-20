import { Button } from "antd";
import style from "./Exam.module.scss";
import classNames from "classnames/bind";
import { BiHeadphone } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import ROUTE_PATH from "@/routes/routePath";
import { useDispatch, useSelector } from "react-redux";
import { ExamActions } from "@/stores/examStore/examReducer";
import { RootState } from "@/stores";
const cx = classNames.bind(style);
const Exam = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isSubmitting } = useSelector((state: RootState) => state.examStore);
  const gotoExamRoom = async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch<any>(ExamActions.participateExam()).then((res: any) => {
      if (res.payload.success) {
        navigate(ROUTE_PATH.EXAM_ROOM);
      }
    });
  };
  return (
    <div className={cx("exam-page-wrapper")}>
      <div className={cx("bg-box")}>
        <div className={cx("content-box")}>
          <img src='/src/assets/logo-full-exampro.png' className={cx("logo")} alt='exam' />
          <div className={cx("panda-2")}></div>
          <div className={cx("title")}>
            <h5 className={cx("text-title", "text-title-shadow")}>
              Nền tảng thi thử <br /> tiếng anh B1 miễn phí
            </h5>
            <h5 className={cx("text-title")}>
              Nền tảng thi thử <br /> tiếng anh B1 miễn phí
            </h5>
          </div>
          <div className={cx("actions")}>
            <Button loading={isSubmitting} onClick={gotoExamRoom} size='large' type='primary' className={cx("btn-start")}>
              Vào thi ngay
              <span className={cx("icon")}>
                <BiHeadphone />
              </span>
            </Button>
            <Button size='large' type='primary' className={cx("btn-schedule")}>
              Lịch thi mới nhất
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Exam;
