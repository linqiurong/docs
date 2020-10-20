# VBA 复制

```vba
Sub Copycopy()

    Dim startColumn As String
    Dim endColumn As String
    Dim startRow As String
    Dim endRow  As String
    Dim code As String
    Dim currentRow As Integer
    Dim sheetsCount As Integer
    Dim storeCode As String
    
    sheetsCount = Sheets.Count
    
    startColumn = Sheets("CloneCode").Range("B2").Value
    endColumn = Sheets("CloneCode").Range("B3").Value
    startRow = Sheets("CloneCode").Range("B4").Value
    endRow = Sheets("CloneCode").Range("B5").Value
    code = Sheets("CloneCode").Range("B6").Value
    startSheet = Sheets("CloneCode").Range("B7").Value
    storeCode = Sheets("CloneCode").Range("B8").Value
    
     totalRow = endRow - startRow
     
     currentRow = 1
        
    
         
    For i = 3 To sheetsCount Step 1
  
        Sheets(i).Select
        
        Sheets(i).Range(startColumn & startRow & ":" & endColumn & endRow).Select
        
        tmpCode = Sheets(i).Range(code).Value
        
          Application.CutCopyMode = False
          
        Selection.Copy
        
        tmpRange = startColumn & currentRow & ":" & endColumn & (currentRow + totalRow)
        
        Sheets("All Data").Select
        
        Range(tmpRange).Select
        
       ActiveSheet.Paste
        Application.CutCopyMode = False
        
        storeCodeRange = storeCode & currentRow & ":" & storeCode & (currentRow + totalRow)
        
        Range(storeCodeRange).Value = tmpCode
        
        currentRow = currentRow + totalRow + 2
        
  Next
End Sub



```