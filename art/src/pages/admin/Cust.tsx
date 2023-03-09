import React from 'react'

const Cust = () => {
  return (
    <div><table className="min-w-full divide-y divide-gray-200">
    <thead>
      <tr>
        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">Jane Doe</td>
        <td className="px-6 py-4 whitespace-nowrap">CEO</td>
        <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span></td>
        <td className="px-6 py-4 whitespace-nowrap">Admin</td>
        <td className="px-6 py-4 whitespace-nowrap">jane.doe@example.com</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
        <td className="px-6 py-4 whitespace-nowrap">CTO</td>
        <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Inactive</span></td>
        <td className="px-6 py-4 whitespace-nowrap">Admin</td>
        <td className="px-6 py-4 whitespace-nowrap">john.doe@example.com</td>
      </tr>
      
    </tbody>
  </table>
  </div>
  )
}

export default Cust;