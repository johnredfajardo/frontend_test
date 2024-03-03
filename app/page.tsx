'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';

import Gallery from './gallery';

import { User } from './types/user';

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const userData = await res.json();

        console.log('users: ', userData);
        setUsers(userData);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    })();

    return () => {
      setUsers([]);
    };
  }, []);

  return (
    <main className={styles.main}>
      {isLoading ? <div>Loading...</div> : <Gallery users={users} />}
    </main>
  );
}
