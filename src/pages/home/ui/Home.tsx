import { Header } from '../../../shared/ui';
import { AddTodo } from '../../../features/todos';
import { TodosList } from '../../../features/todos';
import { Filter } from './Filter';
import { Footer } from '../../../shared/ui';

export function Home() {
  return (
    <div className="max-phone:w-[33.429rem] mx-auto grid w-[41.625rem] grid-rows-[auto_1fr_auto] content-center items-end gap-[1.55rem]">
      <Header />
      <main className="max-phone:gap-y-7 flex flex-col">
        <AddTodo />
        <TodosList />
        <Filter />
      </main>
      <Footer />
    </div>
  );
}
