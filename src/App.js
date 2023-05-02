import './styles.css';
import MyModal from './Modal';

export default function App() {
  return (
    <div>
      <MyModal trigger={<button>열기</button>}>
        <h2>제목</h2>
        <p>내용</p>
      </MyModal>
    </div>
  );
}
