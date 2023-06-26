import { render, screen } from '@testing-library/react';
import App from './App';

// テストする内容を（）内に記述
// renderはコンポーネントを指定
// 指定コンポーネントのaタグを指定している為、LinkElementの変数にgetBytextを入れている
// getByText(/learn react/i)のiは小文字大文字を無視する
// expect=期待する等の意味
// expect(linkElement).toBeInTheDocument();　リンクエレメントの中にドキュメントは存在しているかという処理
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
