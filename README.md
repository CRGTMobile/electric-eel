# Redesign Bid

#### User Stories

[![Stories in Ready](https://badge.waffle.io/CRGTMobile/electric-eel.png?label=ready&title=Ready)](http://waffle.io/CRGTMobile/electric-eel)
[![Stories in Progress](https://badge.waffle.io/CRGTMobile/electric-eel.svg?label=in%20progress&title=In%20Progress)](http://waffle.io/CRGTMobile/electric-eel)

## Developer onboarding
1. [Sign up at crgt.slack.com](http://crgt.slack.com/signup) and join the [#4840West-eel](https://crgt.slack.com/messages/4840west-eel) group
1. Make a [Github account](https://github.com/join)  and post your username on slack so I can add you to the repository
1. Sign into [Waffle](https://waffle.io) with your github account and open the [story board](http://waffle.io/CRGTMobile/electric-eel).
1. [Turn off github email notifications](https://github.com/settings/notifications) under "Watching". These notifications are shown in Slack.

## Learn

* If you are new to git, take the [15 minute git tutorial](https://try.github.io).

## Installation

1. [Install SQL Server 2014 Express](http://www.microsoft.com/en-us/server-cloud/products/sql-server-editions/sql-server-express.aspx)
> This download will require a Microsoft account (free). Choose all the default installation options.

1. [Install Visual Studio Community 2013](http://go.microsoft.com/fwlink/?LinkId=517284)
> Ensure "Web Developer Tools" is checked during install

2. [Install Sitefinity and Sitefinity Thunder](http://www.sitefinity.com/try-now/download)

1. Check out this repository to a folder on your computer

1. Extract the files from …/Backups/Backups.zip into …/Web/App_Data/

## Run

1. On the Start menu, point to All Programs, point to Microsoft SQL Server 2014, point to Configuration Tools, and then click SQL Server Configuration Manager.
1. In SQL Server Configuration Manager, in the left pane, click SQL Server Services.
1. In the details pane, right-click SQL Server (MSSQLServer), and then click Start.
1. Open Web > SitefinityWebApp.csproj in Visual Studio
1. Click Run in Chrome or open [localhost:60876](http://localhost:60876/) for the frontend or [localhost:60876/sitefinity](http://localhost:60876/sitefinity) for the administration dashboard

## Troubleshooting

> Could not load file or assembly 'Microsoft.IdentityModel, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35' or one of its dependencies. The system cannot find the file specified.

* Install Windows update for [Windows Identity Foundation (KB974405)](http://www.microsoft.com/en-us/download/details.aspx?id=17331)

> Could not load file or assembly 'Telerik.Sitefinity' or one of its dependencies. The system cannot find the file specified.

* The /bin folder may have been droped by Visual Studio.  Try pulling it back in from Git. [REF](http://www.sitefinity.com/developer-network/forums/deployment--/could-not-load-file-or-assembly-telerik-sitefinity-or-one-of-its-dependencies)

> An attempt to attach an auto-named database for file …\Web\App_Data\Sitefinity.mdf failed. A database with the same name exists, or specified file cannot be opened, or it is located on UNC share.

* Extract the files from …/Backups/Backups.zip into …/Web/App_Data/

## Reference

* [Markdown Syntax](https://daringfireball.net/projects/markdown/syntax)
