import { Header } from '../../../shared/ui';
import { AddTodo } from '../../../features/todos';
import { TodosList } from '../../../features/todos';
import { Filter } from './Filter';
import { Footer } from '../../../shared/ui';

export function Home() {
  return (
    <div className="mx-auto grid w-[41.625rem] grid-rows-[auto_1fr_auto] content-center items-end gap-[1.55rem] max-phone:w-[33.429rem]">
      <Header />
      <main className="flex flex-col max-phone:gap-y-7">
        <AddTodo />
        <TodosList />
        <Filter />
      </main>
      <Footer />
    </div>
  );
}
