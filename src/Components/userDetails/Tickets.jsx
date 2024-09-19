import React from 'react';
import {
    MdVisibility,
    
    MdVisibilityOff,
  } from "react-icons/md";

function Tickets({userData}) {
    const ticket=userData || {tickets:[]};
    console.log("Tickets"+JSON.stringify(ticket));
  return (
    <div className='mx-auto container justify-center items-center mt-6'>
        <div className='bg-slate-50 rounded-lg p-4 shadow-lg mx-auto'>
            <h2 className='font-bold text-xl text-blue-600 mb-2'>Support Tickets</h2>
            <table className='bg-white border-2 border-gray-200 w-full h-full'>
                <thead className='text-lg'>
                    <tr className='border-b-2 border-gray-100'>
                    <th className='py-2'>Ticket</th>
                    <th  className='py-2'>Issue Type</th>
                    <th  className='py-2'>Query</th>
                    <th  className='py-2'>Subject</th>
                    <th  className='py-2'>Submitted</th>
                    <th  className='py-2'>Status</th>
                    <th  className='py-2'>Action</th></tr>
                </thead>
                <tbody className='text-[15px]'>
                {ticket?.tickets && ticket.tickets.length > 0 ? (
        ticket.tickets.map((ticket, i) => (
                    <tr key={i || ticket.id}>
                    <td  className='py-2'> {ticket.ticket_id || 'N/A'} </td>
                    <td  className='py-2'>{ticket.issue_type || 'N/A'}</td>
                    <td  className='py-2'>{ticket.query || 'N/A'}</td>
                    <td  className='py-2'>{ticket.subject || 'N/A'}</td>
                    <td  className='py-2'>{ticket.date || 'N/A'}</td>
                    <td  className='py-2'>{ticket.status || 'N/A'}</td>
                   {ticket.status ?(  <td  className='py-2'>
                        {ticket.status===true ?(
                             <MdVisibility color="green" size={25} />
                        ):(
                            <MdVisibilityOff color="red" size={25} />
                        )}
                    </td>):( <td>N/A</td>)}
                </tr>

                   ))):(<div className='text-center
                    justify-center flex'><p className='text-xs 
                    items-center p-3 text-gray-300'>No Tickets Found !!!</p></div>)} 
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default Tickets