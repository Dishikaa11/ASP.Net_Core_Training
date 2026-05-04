FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build

WORKDIR /src
COPY ["WebApplication1.csproj", "./"]
RUN dotnet restore "WebApplication1.csproj"
COPY . .
RUN dotnet publish "WebApplication1.csproj" -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS final
WORKDIR /app
COPY --from=build /app/publish .

# docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=Strong@1234" -p 1433:1433 --name mssql-container -d mcr.microsoft.com/mssql/server:2022-latest This is a Dockerfile instruction, not a terminal command
ENV ASPNETCORE_ENVIRONMENT=Development
ENV ASPNETCORE_URLS=http://+:88

EXPOSE 88
ENTRYPOINT ["dotnet", "WebApplication1.dll"]