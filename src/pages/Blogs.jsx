import { useEffect } from 'react';

export default function Blogs() {
  useEffect(() => {
    document.title = 'Blogs';
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Phudu Blogs</h1>
      <section className="space-y-8">
        <article>
          <h2 className="text-2xl font-bold">What is useState and how does it work in React?</h2>
          <p>useState is a React hook that lets you add state to functional components. It returns a state variable and a function to update it. Updates trigger re-renders.</p>
        </article>
        <article>
          <h2 className="text-2xl font-bold">What is the purpose of useEffect in React?</h2>
          <p>useEffect handles side effects like data fetching or subscriptions. It runs after render and can clean up on unmount or dependency changes.</p>
        </article>
        <article>
          <h2 className="text-2xl font-bold">What is a custom hook in React and when should you use one?</h2>
          <p>A custom hook is a function that uses React hooks to reuse logic. Use it for shared stateful behavior across components.</p>
        </article>
        <article>
          <h2 className="text-2xl font-bold">Difference between controlled and uncontrolled components? Which one is better?</h2>
          <p>Controlled: Value from state, better for validation. Uncontrolled: Value from DOM, simpler. Controlled is preferred for complex forms.</p>
        </article>
        <article>
          <h2 className="text-2xl font-bold">Tell us something about useFormStatus()</h2>
          <p>useFormStatus provides form submission status like pending. Useful for disabling buttons during submits in React 19+.</p>
        </article>
      </section>
    </div>
  );
}