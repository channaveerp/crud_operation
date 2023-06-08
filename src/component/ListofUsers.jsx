import React from 'react';
import style from './index.module.css';
import edit from '../asset/edit.png';
import deletei from '../asset/deletei.png';

const ListofUsers = ({ user }) => {
  console.log('user123:', user);

  return (
    <div className={style.table}>
      <table class='table-fixed min-w-full mx-w-xs '>
        <thead className='border w-5'>
          <tr className='border'>
            <th>Email</th>
            <th>Phone</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {user?.map((item, index) => (
            <tr className='border'>
              <td class='border w-40 ml-8'>{item.email}</td>
              <td className='border'>{item.phone}</td>
              <td className='w-5 '>
                <img src={edit} alt='' className='w-5' />
              </td>
              <td className='w-10'>
                <img src={deletei} alt='' className='w-5' />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListofUsers;
