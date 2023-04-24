import styles from "./styles.module.css";

export default function Aboutlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav>About NavBer</nav>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
