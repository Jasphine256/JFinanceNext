import React from 'react'

const ListItem = (props) => {
  return (
    <li className="w-full flex justify-between gap-x-6 py-5">
        <div className="flex min-w-0 gap-x-4">
            <img alt="" src={props.person.imageUrl} className="h-12 w-12 flex-none rounded-full bg-gray-50" />
            <div className="min-w-0 flex-auto">
            <p className="text-sm/6 font-semibold text-white">{props.person.name}</p>
            <p className="mt-1 truncate text-xs/5 text-white">{props.person.email}</p>
            </div>
        </div>
        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm/6 text-white">{props.person.role}</p>
            {props.person.lastSeen ? (
            <p className="mt-1 text-xs/5 text-white">
                Last seen <time dateTime={props.person.lastSeenDateTime}>{props.person.lastSeen}</time>
            </p>
            ) : (
            <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
                <p className="text-xs/5 text-gray-500">Online</p>
            </div>
            )}
        </div>
    </li>
  )
}

export default ListItem;