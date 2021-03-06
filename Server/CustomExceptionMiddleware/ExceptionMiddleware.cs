using System;
using System.Net;
using System.Threading.Tasks;
using KinderKulturServer.Contracts;
using KinderKulturServer.Models;
using Microsoft.AspNetCore.Http;

namespace KinderKulturServer.CustomExceptionMiddleware
{
   public class ExceptionMiddleware
   {
      private readonly RequestDelegate _next;
      private readonly ILoggerManager _logger;

      public ExceptionMiddleware(RequestDelegate next, ILoggerManager logger)
      {
         this._next = next;
         this._logger = logger;
      }

      public async Task InvokeAsync(HttpContext httpContext)
      {
         try
         {
            await _next(httpContext);
         }
         catch (System.Exception ex)
         {
            _logger.LogError($"Something went wrong: {ex}");
            await HandleExceptionAsync(httpContext, ex);
         }
      }

      private Task HandleExceptionAsync(HttpContext context, Exception ex)
      {
         context.Response.ContentType = "application/json";
         context.Response.StatusCode = (int) HttpStatusCode.InternalServerError;

         return context.Response.WriteAsync(new ErrorDetails()
         {
            StatusCode = context.Response.StatusCode,
               Message = "Internal Server Error from the custom middleware."
         }.ToString());
      }
   }
}