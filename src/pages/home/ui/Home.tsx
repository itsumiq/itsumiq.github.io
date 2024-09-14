import { Header } from '../../../shared/ui';
import { AddTodo } from '../../../features/todos';
import { TodosList } from '../../../features/todos';

export function Home() {
  return (
    <div className="m-[0_auto] grid h-full w-[41.625rem] grid-rows-[auto_1fr_auto] gap-[1.55rem] pt-[3.65rem]">
      <Header />
      <main className="flex flex-col">
        <AddTodo />
        <TodosList />
      </main>
    </div>
  );
}
