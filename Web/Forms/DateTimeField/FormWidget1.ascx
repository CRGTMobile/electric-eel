<%@ Control %>
<%@ Register Assembly="Telerik.Sitefinity" TagPrefix="sf" Namespace="Telerik.Sitefinity.Web.UI" %>

<asp:Label runat="server" ID="titleLabel" CssClass="sfTxtLbl" Text="title label" AssociatedControlID="TextBox1" />
<div class="sfFieldWrp">
    <telerik:RadDateTimePicker ID="dateTimePicker" runat="server" />
    <sf:SitefinityLabel runat="server" ID="descriptionLabel" WrapperTagName="div" CssClass="sfDescription"/>
    <sf:SitefinityLabel runat="server" ID="exampleLabel" WrapperTagName="div" CssClass="sfExample"/>
</div>