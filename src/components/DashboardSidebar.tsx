
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import Logo from './Logo';

interface SidebarItem {
  title: string;
  href: string;
  icon: React.ReactNode;
  children?: SidebarItem[];
}

interface SidebarSectionProps {
  items: SidebarItem[];
  className?: string;
}

const DashboardSidebar = ({ className }: { className?: string }) => {
  const [expanded, setExpanded] = useState<string | null>(null);
  const location = useLocation();

  const toggleExpand = (title: string) => {
    setExpanded(expanded === title ? null : title);
  };

  const sidebarItems: SidebarItem[] = [
    {
      title: 'Overview',
      href: '/dashboard',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <rect width="7" height="9" x="3" y="3" rx="1"></rect>
          <rect width="7" height="5" x="14" y="3" rx="1"></rect>
          <rect width="7" height="9" x="14" y="12" rx="1"></rect>
          <rect width="7" height="5" x="3" y="16" rx="1"></rect>
        </svg>
      ),
    },
    {
      title: 'Academic Records',
      href: '/dashboard/records',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
          <path d="M14 2H10a2 2 0 0 0-2 2v2h8V4a2 2 0 0 0-2-2Z"></path>
          <path d="M12 11h4"></path>
          <path d="M12 16h4"></path>
          <path d="M8 11h.01"></path>
          <path d="M8 16h.01"></path>
        </svg>
      ),
      children: [
        {
          title: 'Current Term',
          href: '/dashboard/records/current',
          icon: <span className="w-1.5 h-1.5 rounded-full bg-current"></span>,
        },
        {
          title: 'History',
          href: '/dashboard/records/history',
          icon: <span className="w-1.5 h-1.5 rounded-full bg-current"></span>,
        },
        {
          title: 'Certificates',
          href: '/dashboard/records/certificates',
          icon: <span className="w-1.5 h-1.5 rounded-full bg-current"></span>,
        },
      ],
    },
    {
      title: 'Profile',
      href: '/dashboard/profile',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      ),
    },
    {
      title: 'Documents',
      href: '/dashboard/documents',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
        </svg>
      ),
    },
    {
      title: 'Settings',
      href: '/dashboard/settings',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      ),
    },
  ];

  return (
    <div className={cn("flex flex-col h-full bg-white dark:bg-gray-900 border-r", className)}>
      <div className="p-4 border-b">
        <Logo />
      </div>
      <nav className="flex-1 overflow-auto py-4">
        <SidebarSection items={sidebarItems} />
      </nav>
      <div className="p-4 border-t">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-digicertify-primary flex items-center justify-center text-white font-semibold">
              J
            </div>
            <div>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-gray-500">Student</p>
            </div>
          </div>
          <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" x2="9" y1="12" y2="12"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );

  function SidebarSection({ items, className }: SidebarSectionProps) {
    return (
      <div className={cn("space-y-1 px-2", className)}>
        {items.map((item, index) => {
          const isActive = location.pathname === item.href || location.pathname.startsWith(item.href + '/');
          const hasChildren = item.children && item.children.length > 0;
          const isExpanded = expanded === item.title;
          
          return (
            <div key={index}>
              {hasChildren ? (
                <button
                  onClick={() => toggleExpand(item.title)}
                  className={cn(
                    "flex items-center justify-between w-full px-3 py-2 text-sm rounded-md",
                    isActive ? "bg-digicertify-light dark:bg-gray-800 text-digicertify-primary dark:text-white font-medium" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  )}
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span>{item.title}</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
              ) : (
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 text-sm rounded-md",
                    isActive ? "bg-digicertify-light dark:bg-gray-800 text-digicertify-primary dark:text-white font-medium" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  )}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              )}
              
              {hasChildren && isExpanded && (
                <div className="pl-8 mt-1 space-y-1">
                  {item.children?.map((child, childIndex) => {
                    const isChildActive = location.pathname === child.href;
                    
                    return (
                      <Link
                        key={childIndex}
                        to={child.href}
                        className={cn(
                          "flex items-center gap-3 px-3 py-2 text-sm rounded-md",
                          isChildActive ? "bg-digicertify-light/50 dark:bg-gray-800/50 text-digicertify-primary dark:text-white font-medium" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                        )}
                      >
                        {child.icon}
                        <span>{child.title}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }
};

export default DashboardSidebar;
